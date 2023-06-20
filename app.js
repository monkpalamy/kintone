kintone.events.off('app.record.index.show', (event) => {
    var id = kintone.app.getId();
    console.log("ID : "+id);
  });


kintone.events.off('app.record.index.show', (event) => {
    const element = kintone.app.getFieldElements('name');
    // 要素の文字色を赤に設定する
    element.forEach((element) => {
      element.style.color = 'red';
      
    });
    const elements = kintone.app.getFieldElements('age');
    // 要素の文字色を赤に設定する
    elements.forEach((elemente) => {
      elemente.style.color = 'blue';
      
    });
  });

//Donn't understand
kintone.events.off('app.record.index.show', (event) => {
    const Id = kintone.app.getLookupTargetAppId ('product_01');
    console.log("ID : "+Id);
  });

kintone.events.off('app.record.index.show', (event) => {
    var related = kintone.app.getRelatedRecordsTargetAppId('Related_app');
    console.log('id = ' + related);
});

kintone.events.off('app.record.index.show', (event) => {
  var A = kintone.app.getQueryCondition();
  console.log(A);
})

kintone.events.off('app.record.index.show', function(event) {
    var info = kintone.app.getQuery()
    console.log(info);
});


