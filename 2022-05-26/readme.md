cd projekt \n
dotnet build \n
cd bin \n
dotnet publish -r linux-arm -o bin/arm \n
scp -r arm pi@172.25.1.130:/home/pi/projekt \n

Raspberyy PI \n
sudo nano /boot/config.txt \n
dtparam=spi=on \n
sudo reboot \n
cd projekt \n
dotnet projekt.dll