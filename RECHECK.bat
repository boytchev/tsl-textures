@echo off
rem next if is used to not close the window in case of error
if not defined in_subprocess (cmd /k set in_subprocess=y ^& %0 %*) & exit )

echo Eslinting src
call npx eslint --fix src/*.js

echo Eslinting online
call npx eslint --fix online/*.js

echo Eslinting examples
call npx eslint --fix "./examples/**/*.js"

echo Eslinting media
call npx eslint --fix "./media/**/*.js"

pause
exit

