all: clean build copy run

build:
	cd ./app && ember build && cd ..

copy:
	cp -r ./app/dist/* ./www 

run:
	phonegap build ios
	phonegap run ios

logs:
	tail -f -n 100 ./platforms/ios/cordova/console.log

clean:
	rm -rf ./www/app ./www/assets ./www/tests
	rm -f ./www/index.html
