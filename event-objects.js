//Event object////////////////////////////////////////////
kintone.events.off('app.record.index.edit.change.Drop_down0', (event) => {
    const record = event.record;
    record['name'].value = 'SyStory';
    return event;
  });
  //ເຫດການເກີດຂື້ນເມື່ອກົດປຸ່ມ Drop_down


  kintone.events.off('app.record.edit.change.Drop_down_t0', (event) => {
    const tableRow = event.record['Table'].value;
    tableRow[0].value['name_0'].value = 'テーブルの1行目を上書き';
    tableRow[0].value['lastname_0'].value = 'Kintone';
    return event;
    // alert("lll")
  });
  //ເລືອກບາງສີ່ງບາງຢ່າງໃນDrop_down ເພື່ອປ່ຽນຄຸນນະສົມບັດຂອງ input ໃນ Table


  kintone.events.off('app.record.index.edit.change.Drop_down_1', (event) => {
    const record = event.record;
    record['lastname'].disabled = true;
    return event;
  });


  
// kintone.events.off('app.record.index.edit.change.Drop_down_1', (event) => {
//   const record = event.record;
//   record['name'].error = 'エラーです！';
//   return event;
// });


// kintone.events.off('app.record.edit.change.Drop_down_t0', (event) => {
//   const tableRow = event.record['Table'].value;
//   tableRow[0].value['name_0'].error = 'エラーです！';
//   return event;
// });


// kintone.events.off('app.record.create.change.Drop_down_t0', (event) => {
//   event.error = 'エラーです！';
//   return event;
// });


kintone.events.off('app.record.index.edit.submit.success', (event) => {
  event.url = 'http://www.laogov.gov.la/province/Pages/Provincetourism.aspx?CateID=1&ItemID=356&MenuID=6';
  return event;
});
    

kintone.events.off('app.record.detail.process.proceed', (event) => {
  const record = event.record;
  record['process'].value = 'この文字列で上書き';
  return event;
});


kintone.events.off('app.record.detail.process.proceed', (event) => {
  const record = event.record;
  const tableRow = record['Table'].value;
  tableRow[0].value['name_0'].value = 'テーブルの1行目を上書き';
  return event;
});



kintone.events.off('app.record.detail.delete.submit', (event) => {
  event.error = ('エラーです');
  return event;
});


kintone.events.off('app.record.create.show', (event) => {
  const record = event.record;
  record['name'].value = 'この文字列で上書き';
  return event;
});


kintone.events.off('app.record.create.show', (event) => {
  const record = event.record;
  const tableRow = record['Table'].value;
  tableRow[0].value['name_0'].value = 'テーブルの1行目を上書き';
  tableRow[0].value['lastname_0'].value = 'テーブルの1行目を上書き';

  // テーブルの末尾に行を追加する
  const newRow = {
    value: {
      name_0: {
        type: 'SINGLE_LINE_TEXT', // テーブルの行を追加するには、フィールドタイプを指定する必要がある
        value: 'テーブルに追加する行',
      },
      
      lastname_0: {
        type: 'SINGLE_LINE_TEXT', // テーブルの行を追加するには、フィールドタイプを指定する必要がある
        value: 'テーブルに追加する行',
      },
    },
  };
  tableRow.push(newRow);
  return event;
});


kintone.events.off('app.record.create.change.Drop_down_1', (event) => {
  const record = event.record;
  record['name'].disabled = true;
  return event;
});


kintone.events.off('app.record.create.change.Drop_down_1', (event) => {
  const record = event.record;
  record['name'].error = 'このエラーメッセージを表示';
  return event;
});


kintone.events.off('app.record.create.change.Drop_down', (event) => {
  const record = event.record;
  const tableRow = record['Table_0'].value;
  tableRow[0].value['name_1'].error = 'テーブルの1行目にエラーを表示';
  return event;
});



kintone.events.off('app.record.create.change.Drop_down0', (event) => {
  event.error = 'エラーです！';
  return event;
});


// kintone.events.on('app.record.create.show', (event) => {
//   const record = event.record;
//   record['age'].value = '0001';
//   record['age'].lookup = true;
//   // または record['ルックアップ'].lookup = 'UPDATE';
//   return event;
// });


// kintone.events.on('app.record.create.show', (event) => {
//   const record = event.record;
//   record['Lookup_0'].lookup = 'CLEAR';
//   return event;
// });


kintone.events.off('app.record.create.change.Drop_down0', (event) => {

  const row = event.changes.row;

  const field = event.changes.field;

  console.log("Row",row)
  console.log("field",field)

  return event;
});



kintone.events.off('app.record.edit.submit.success', (event) => {
  event.url = 'http://www.laogov.gov.la/province/Pages/Provincetourism.aspx?CateID=1&ItemID=356&MenuID=6';
  console.log('url: ' + event.url);
  return event;
});



