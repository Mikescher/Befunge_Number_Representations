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

Files
-----

 From     | To       | File                                                                                                               | Size
----------|----------|--------------------------------------------------------------------------------------------------------------------|---------
  0       |   524287 | **[output/out_1.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_1.csv)**   | 524288
   524288 |  1048575 | **[output/out_2.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_2.csv)**   | 524288
  1048576 |  1572863 | **[output/out_3.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_3.csv)**   | 524288
  1572864 |  2097151 | **[output/out_4.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_4.csv)**   | 524288
  2097152 |  2621439 | **[output/out_5.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_5.csv)**   | 524288
  2621440 |  3145727 | **[output/out_6.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_6.csv)**   | 524288
  3145728 |  3670015 | **[output/out_7.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_7.csv)**   | 524288
  3670016 |  4194303 | **[output/out_8.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_8.csv)**   | 524288
  4194304 |  4718591 | **[output/out_9.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_9.csv)**   | 524288
  4718592 |  5242879 | **[output/out_10.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_10.csv)** | 524288
  5242880 |  5767167 | **[output/out_11.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_11.csv)** | 524288
  5767168 |  6291455 | **[output/out_12.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_12.csv)** | 524288
  6291456 |  6815743 | **[output/out_13.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_13.csv)** | 524288
  6815744 |  7340031 | **[output/out_14.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_14.csv)** | 524288
  7340032 |  7864319 | **[output/out_15.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_15.csv)** | 524288
  7864320 |  8388607 | **[output/out_16.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_16.csv)** | 524288
  8388608 |  8912895 | **[output/out_17.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_17.csv)** | 524288
  8912896 |  9437183 | **[output/out_18.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_18.csv)** | 524288
  9437184 |  9961471 | **[output/out_19.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_19.csv)** | 524288
  9961472 | 10485759 | **[output/out_20.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_20.csv)** | 524288
 10485760 | 11010047 | **[output/out_21.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_21.csv)** | 524288
 11010048 | 11534335 | **[output/out_22.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_22.csv)** | 524288
 11534336 | 12058623 | **[output/out_23.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_23.csv)** | 524288
 12058624 | 12582911 | **[output/out_24.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_24.csv)** | 524288
 12582912 | 13107199 | **[output/out_25.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_25.csv)** | 524288
 13107200 | 13631487 | **[output/out_26.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_26.csv)** | 524288
 13631488 | 14155775 | **[output/out_27.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_27.csv)** | 524288
 14155776 | 14680063 | **[output/out_28.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_28.csv)** | 524288
 14680064 | 15204351 | **[output/out_29.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_29.csv)** | 524288
 15204352 | 15728639 | **[output/out_30.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_30.csv)** | 524288
 15728640 | 16252927 | **[output/out_31.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_31.csv)** | 524288
 16252928 | 16777215 | **[output/out_32.csv](https://raw.githubusercontent.com/Mikescher/Befunge_Number_Representations/master/output/out_32.csv)** | 524288

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
Also the safe file becomes pretty big **(around one gigabyte)** and when you output all numbers the textfiles are together around **1.8 gigabyte** big.


Optimizations
-------------

If you find a better representation for a number tell me :D. Just open an issue on Github or something ...  
Also do the same if you have another algorithm for BefunRep, that improves a bunch of numbers *(and has a reasonable runtime)*.
