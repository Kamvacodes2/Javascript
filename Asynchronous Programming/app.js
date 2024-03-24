'use strict'
function fakeAjax(url,callback) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		callback(fake_responses[url]);
	},randomDelay);

    
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
	fakeAjax(file,function(text){
        handleResponse(file, text);
	});
}

function handleResponse(filename, contents) {
    if(!(filename in response)) {
        response[filename] = contents
    }
    let array1 = ['file1', 'file2', 'file3'];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] in response) {
            if (typeof response[array1[i]] == 'string') {
                output(response[array1[i]])
                response[array1[i]] = false;
            }
        }
    }
}

let response = {};

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
output('complete!');