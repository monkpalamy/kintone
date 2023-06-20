kintone.events.off('app.record.edit.show', function (event) {

    const body = {
        app: kintone.app.getId(),
        id: kintone.app.record.getId(),
    };

    kintone.api(kintone.api.url('/k/v1/record.json', true), 'GET', body, (resp) => {
        // success
        console.log('success:::', resp);
    }, (error) => {
        // error
        console.log('itis:::', error);
    });

    (async () => {
        const body = {
            app: kintone.app.getId(),
            id: kintone.app.record.getId(),
        };

        try {
            const resp = await kintone.api(kintone.api.url('/k/v1/record.json', true), 'GET', body);
            // success
            console.log('success:::', resp);
        } catch (error) {
            // error
            console.log('itis:::', error);
        }
    })();

    return event;
});


//  var aurl = kintone.api.url ('/k/v1/records.json', false)
//  console.log('Get Url API ::: ',aurl)


//  const params = {
//     app: 4,
//     fields: ['records']
//   };
//   var url = kintone.api.urlForGet('/k/v1/records.json', params, false);
//   console.log('url1:::',url);
// https://sample.cybozu.com/k/v1/records.json?app=4&fields[0]=recordId


kintone.events.off('app.record.index.show', async (event) => {
    const headers = {
        'X-Requested-With': 'XMLHttpRequest',
    };
    // アップロードするファイルを生成する
    const blob = new Blob([''], {
        type: 'text/plain',
    });
    const formData = new FormData();
    const csrfToken = kintone.getRequestToken();
    // ファイルをアップロードする API は、POST メソッドのため、 CSRF トークンを設定する
    formData.append('__REQUEST_TOKEN__', csrfToken);
    formData.append('file', blob, 'text.txt');

    const params = {
        method: 'POST',
        headers,
        body: formData,
    };

    const resp = await fetch('/k/v1/file.json', params);
    const respData = await resp.json();
    console.log('Token:::', respData);
});

kintone.events.off('app.record.index.show', (event) => {
    kintone.api.getConcurrencyLimit().then(function (result) {
        console.log('Limit:::', result);
        // Sample response
        // {limit: 100, running: 1}
    });
})


kintone.events.off('app.record.index.show', (event) => {
    kintone.proxy('https://*****.***.net', 'GET', {}, {}, function (body, status, headers) {
        console.log(status, JSON.parse(body), headers);
    }, function (error) {
        console.log(error); // Display the response body (string) from the proxy API
    });
//     kintone.proxy('https://unitech-learn-server.onrender.com/users', 'GET', {}, {}).then(function(args) {
//   /*  args[0] -> body(string)
//    *  args[1] -> status(number)
//    *  args[2] -> headers(object)
//    */
//   console.log(args[1], JSON.parse(args[0]), args[2]);
// }, function(error) {
//   console.log(error); // Display the response body (string) from the proxy API
// });
});