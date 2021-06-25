import Redirect from "./Redirect";

function getCode(e) {
  var authCode = JSON.stringify(e.parameter.code);
  var authCodeClean = authCode.replace(/['"]+/g, '');
  var accessToken = getToken(authCodeClean);
  
  if (accessToken) {
    return ( 
        <Redirect/>
    )
  }
  else {
    return alert('Authentication Failed');
  }
  
  }

function getToken(authCodeClean) { 
  var clientID = "..app id";
  var clientSecret = "..app secret";
  var encodedKeys = Utilities.base64Encode(clientID + ":" + clientSecret);
  var options = {
    'method': "post", 
    'headers': {"Authorization": "Basic " + encodedKeys},
  };
  
  var returnUrl = "..app url";
  var response = UrlFetchApp.fetch("https://zoom.us/oauth/token?grant_type=authorization_code&code=" + authCodeClean + "&redirect_uri=" + returnUrl, options);
  
  var resultText = response.getContentText();
  var resultObj = JSON.parse(resultText);
  var accessToken = resultObj['access_token'];
  return accessToken; 
  
  }
  