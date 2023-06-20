
// kintone.events.off('app.record.index.show', (event) => {
//     const element = kintone.app.getFieldElements('name');
//     element.forEach((element) => {
//       element.style.color = 'red';
      
//     });
// });


kintone.events.off('app.record.detail.show', (event) => {
    const getId = kintone.app.record.getId();
    console.log(getId);
    return event;
});


kintone.events.off('app.record.index.show', function(event) {
    var record = event.records[0];
    var recordId = record['$id'].value;
    kintone.app.record.get(recordId, function(resp) {
        console.log(resp);
    });
});

kintone.events.on('app.record.edit.show', function(event) {
    
    var body = {
        'app': kintone.app.getId(),
        'id': kintone.app.record.getId()
      };
      
      
      
      kintone.api(kintone.api.url('/k/v1/record.json', true), 'GET', body, (resp) => {
      
        // success
        console.log(resp);
        let record = kintone.app.record.get(resp);
        record.record.name.value = 'vaivai';
        kintone.app.record.set(record);

        console.log(record);
        // console.log(resp.record.name.value);
      
      }, function(error) {
        // error
        console.log(error);
      
      });

    return event;
});

  
kintone.events.off('app.record.detail.show', function(event) {

  const divElement = document.createElement('div');
  divElement.textContent = 'palamy';
  divElement.style.color = "red";
  divElement.style.textAlign = "center";
  const element = kintone.app.record.getSpaceElement('space_0');
  
  element.appendChild(divElement);

  return event;
});

kintone.events.off('app.record.edit.show', function(event) {

  let fieldGroup = kintone.app.record.setGroupFieldOpen('Field_group', true)

  return event;

});

kintone.events.off('app.record.edit.show', function(event) {
  const fieldShown = kintone.app.record.setFieldShown('Field_group', false)
  return event;
});


kintone.events.off('app.record.edit.show', function(event) {
    // 追加したい要素を作成
const divElement = document.createElement('div');
divElement.textContent = 'ໜ້າແກ້ໄຂ';
divElement.style.color = "red";
divElement.style.textAlign = "center";
divElement.style.fontSize = "50px"


const element = kintone.app.record.getHeaderMenuSpaceElement();
element.appendChild(divElement);
  return event;
});



