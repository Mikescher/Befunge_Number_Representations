Befunge-93 Number Representations
=================================
*Note: BefunRep is part of my [BefunUtils collection](https://github.com/Mikescher/BefunUtils) where I put most of my .Net programs for and around Befunge*

___

A common problem in [Befunge](http://esolangs.org/wiki/Befunge) is to push a number onto the stack *(in an efficient manner)*.

[BefunRep](https://github.com/Mikescher/BefunRep) is a tool by me to generate fairly optimal representations for a range of numbers.
I took the time to let it calculate the numbers from -2^24 to +2^24 an uploaded them here.

Unfortunately these are a lot of numbers and I scratched the [maximum repository size](https://help.github.com/articles/what-is-my-disk-quota/) of 1GB so I uploaded only the positive numbers and split them into 32 different files. If you want/need all the number representations you can either generate them by yourself with [Mikescher/BefunRep](https://github.com/Mikescher/BefunRep) or download the safe file [here](https://mega.co.nz/#!4Ns2QbTJ!Ubfy5-IVFRWDkO5NLbo2eNM6AfC1_hQj2FZOuUo8x78), but to output them into text files you would still need BefunRep :D. 

> **Note:**
>
> This is **befunge-93** so I use only the original [befunge-93 command set](https://github.com/catseye/Befunge-93/blob/master/doc/Befunge-93.markdown). There are a few neat features in befunge-98 that I could probably use to improve some numbers, but:  
> A) Befunge-93 is more popular and there are more interpreters online and [offline](https://github.com/Mikescher/BefunExec).  
> B) It really doesn't improve that much, I kinda tested it.  
> C) I like befunge-93 more, it's just more *basic*.  

Interface
=========

You can easily access the data with this online terminal:
### [> http://mikescher.github.io/Befunge_Number_Representations/](http://mikescher.github.io/Befunge_Number_Representations/)


Do It Yourself
--------------

In this repository are a few batch files I used to calculate the numbers. All these files depend on [BefunRep.exe](https://github.com/Mikescher/BefunRep) lying in the same folder as the batch files.

File                  | Description
----------------------|-----------------------------------------------------------
RESET.bat             | Delete the old safe file and generate a new one (with one iteration of calculations)
STATISTICS.bat        | Show statistics about the current safe file
UPDATE_SINGLE.bat     | Do a single iteration of the calculation algorithms
UPDATE_FULL.bat       | Do a full calculations (iterate until there are no more improvements to be made)
FULL.bat              | Do a reset, followed by a full calculation (does everything except outputting)
OUTPUT (POSITIVE).bat | Output Numbers from `0` to `2^24` to the folder `output/`. Make sure that the folder exists.

Be aware that you calculate a lot of numbers here. All operations will take a good amount of time (I let it run for a **whole day** to calculate everything).  
Also the safe file becomes pretty big **(around 100 megabyte)** and when you output all numbers the textfiles are together around **300 megabyte** big.


Optimizations
-------------

If you find a better representation for a number tell me :D. Just open an issue on Github or something ...  
Also do the same if you have another algorithm for BefunRep, that improves a bunch of numbers *(and has a reasonable runtime)*.
