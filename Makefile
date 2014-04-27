all: clean build copy build-gap run

build:
	cd ./app && ember build production && cd ..

build-gap:
	phonegap build ios

copy:
	cp -r ./app/dist/* ./www 

run:
	phonegap run ios

logs:
	tail -f -n 100 ./platforms/ios/cordova/console.log

clean:
	rm -rf ./www/app ./www/assets ./www/tests
	rm -f ./www/index.html
