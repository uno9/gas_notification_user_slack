var postUrl = 'Slackでincoming webhookのURLを発行';
var allUser = [];

// タスクを呼び出し
function findToday() {
   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
   var d = new Date();
   var today = Utilities.formatDate(d, "JST","M/dd"); 
   var foundRow = findRow(sheet,today,1);
   
   var shiftUser = sheet.getRange(foundRow, <取得したい列番号>).getValue();
   allUser = [saleShiftUser];
   postSlack(allUser);

   var todayCell = sheet.getRange(foundRow,1);
   sheet.setActiveRange(todayCell); 
}

// 今日の日付の行を取得
function findRow(sheet,val,col){
   var dat = sheet.getDataRange().getValues();
   for(var i=1;i < dat.length; i++){
      try{var target = Utilities.formatDate(dat[i][col-1], "JST","M/dd");
   }catch(e){
     console.log(e);
   }
   if(target === val){
      return i+1;
      break;
   }
}
return 0;
}

// slackへ指定した文言を指定したチャンネルに送信
function postSlack(shiftUser) {
  var message = `
  今日の担当が${shiftUser[0]}さんです。
  よろしくお願いいたします:hand:
  `;
  var jsonData =
  {
     "channel" : "<送信したいslackチャンネル>",
     "text" : message,
  };
  var payload = JSON.stringify(jsonData);
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };
  UrlFetchApp.fetch(postUrl, options);
}
