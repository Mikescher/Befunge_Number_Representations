var REGEX_NUMBER = /^(\-?[0-9]+|0[xX][0-9A-Fa-f]+)$/;
var REGEX_NUMBER_RANGE = /^([0-9]+|0[xX][0-9A-Fa-f]+)[ ]*\-[ ]*([0-9]+|0[xX][0-9A-Fa-f]+)$/;

const MIN = 0;
const MAX = 16777215;
const PARTITION_SIZE = 128;
const FILE_SIZE = 2048;
const FOLDER_DEPTH = 1;
const PARTITION_PADDING = 8;
const BASE_PATH = "output/"
//const BASE_PATH = "https://github.com/Mikescher/Befunge_Number_Representations/blob/master/output/"

var repDict = {};
var reqLock = false;
var reqQueue = [];

function leftpad(n, width, z) { z = z || '0'; n = n + ''; return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n; }
function rightpad(str,l,c) {return str+Array(l-str.toString().length+1).join(c||" ")}


function getFilePath(number) {
  var n = Math.floor(number / FILE_SIZE) * FILE_SIZE;
  
  var path = "out_" + leftpad(n, PARTITION_PADDING) + ".tsv";

  var mod = FILE_SIZE;
  for(var i = 0; i < FOLDER_DEPTH; i++) {
      mod *= PARTITION_SIZE;
      n = Math.floor(n / mod) * mod;
      path = leftpad(n, PARTITION_PADDING) + "/" + path;
  }

  return BASE_PATH + path;
}

function parseData(data) {
    data.split('\n').forEach(function(line) {
        var split = line.split('\t');
        if (split.length != 2) return;
        
        repDict[parseInt(split[0], 16)] = split[1];
    }, this);
}

function work(command, term) {
    if (command.trim() == '') {
        term.echo("");
    } else if (command === 'help') {
        runHelp(term);
    } else if (command === 'clear') {
        term.clear();
    } else if (command === 'download') {
        window.open('https://www.mikescher.com/programs/view/BefunUtils', '_self');
    } else if (command === 'source') {
        window.open('https://github.com/Mikescher/BefunRep', '_self');
    } else if (command.match(REGEX_NUMBER)) {
       runRep(term, parseInt(command), false)
    } else if (command.match(REGEX_NUMBER_RANGE)) {
       runRepRange(term, parseInt(command.split('-')[0].trim()), parseInt(command.split('-')[1].trim()))
    } else {
       term.error('Command "' + command + '" not recognized. Try entering "help"');
    }
}

function runHelp(term) {
  term.echo(" ");
  term.echo("   ==========");
  term.echo("    BefunRep");
  term.echo("   ==========");
  term.echo(" ");
  term.echo("A common problem in befunge is writing literals for large numbers (with the least amount of code).");
  term.echo("BefunRep is a program by me (https://www.mikescher.de) that calculates representations for a big range of numbers.");
  term.echo("These calculations can take a while and are then saved in a binary file (called 'safe').");
  term.echo("For convenience I calculated the numbers from " + MIN + " to " + MAX + " and commited them to github (https://github.com/Mikescher/Befunge_Number_Representations).");
  term.echo("This is nothing more than a simple interface to get them.");
  term.echo("For bigger projects its probably advicable to download the files or better yet create a own safe with the newest BefunRep version (type the command 'source')");
  term.echo(" ");
  term.echo("BefunRep is part of the BefunUtils tool package for Befunge-93 development by me (Mikescher)");
  term.echo(" ");
  term.echo("Special thanks to:");
  term.echo("  - 'jcubic' for his jQuery terminal plugin");
  term.echo("  - 'github' for hosting all my crap");
}

function runRepRange(term, start, end) {
    if (end - start < 0 || end-start > 128) {
        term.error("You can maximally request 128 items at once");
        return;
    }
    
    if (start < MIN || end > MAX) {
        term.error("The numbers are not in the range of the precalculated safe ("+MIN+" - " + MAX + ")");
        term.error("You can download BefunRep and generate you own (bigger) safe");
        term.error("Enter 'download' to download the binary or 'source' to view the repository with the up-to-date code");
        return;
    }
    
    for (var i = start; i <= end; i++) {
        runRep(term, i, true);
    }
}

function runRep(term, number, ext) {
    
    if (number in repDict) {
        if (ext) term.echo(rightpad(number, 10, " ") + " => " + repDict[number]); else term.echo(repDict[number]);
        
        var next = reqQueue.shift();
        if (next !== undefined) next();
        
        return;
    }
    
    if (number < MIN || number > MAX) {
        term.error("The number is not in the range of the precalculated safe ("+MIN+" - " + MAX + ")");
        term.error("You can download BefunRep and generate you own (bigger) safe");
        term.error("Enter 'download' to download the binary or 'source' to view the repository with the up-to-date code");
        
        var next = reqQueue.shift();
        if (next !== undefined) next();
        
        return;
    }
    
    var fp = getFilePath(number);

    if (reqLock) {
        reqQueue.push(function() {runRep(term, number, ext)});
        return;
    }

    reqLock = true;
    jQuery.get(fp, undefined, function(data) 
    {
        parseData(data);
        if (ext) term.echo(rightpad(number, 10, " ") + " => " + repDict[number]); else term.echo(repDict[number]);
    }, 
    "text").fail(function(jqXHR, textStatus) 
    {
        term.error("Could not get data from " + fp);
        term.error(textStatus);
    })
    .always(function() 
    {
        reqLock = false;
        var next = reqQueue.shift();
        if (next !== undefined) next();
    });
}

var config = {
    greetings: 'This is the online interface for BefunRep'+'\n'+
               'Enter a number to see a (nearly) optimal befunge-93 representation'+'\n'+
               'All values are loaded from this repository: https://github.com/Mikescher/Befunge_Number_Representations'+'\n'+
               'Enter "help" for more information',
    name: 'befunrep_online',
    prompt: 'bef93> '
}

function init($, undefined) {
    $('#befterminal').terminal(work, config); 
}

jQuery(init);