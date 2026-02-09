@ECHO OFF
setlocal EnableDelayedExpansion


set "FILE=dist/tsl-textures.js"
set "FILEMIN=dist/tsl-textures.min.js"


if exist "%file%" (for %%F in ("%file%") do set old=%%~zF) else set old=0
if exist "%filemin%" (for %%F in ("%filemin%") do set oldmin=%%~zF) else set oldmin=0


CALL npm run build


if exist "%file%" (for %%F in ("%file%") do set new=%%~zF) else set new=0
if exist "%filemin%" (for %%F in ("%filemin%") do set newmin=%%~zF) else set newmin=0


echo .

set /a "old = old / 1024"
set /a "oldmin = oldmin / 1024"
set /a "new = new / 1024"
set /a "newmin = newmin / 1024"


echo %old% ^-^> !new! KB
echo ^ %oldmin% ^-^>^  !newmin! KB minified
echo .

pause
