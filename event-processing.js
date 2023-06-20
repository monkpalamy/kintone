   kintone.events.off(['app.record.index.edit.submit'], (event) => {
    Swal.fire(
      'ສຳເລັດ',
      '',
      'success'
    )
  });
    //ເຫດການເກີດຂື້ນເມື່ອກົດປຸ່ມເສບ 


    kintone.events.off(['app.record.index.edit.change.Radio_button'], (event) => {
      Swal.fire(
        'ສຳເລັດ',
        '',
        'success'
      )
    });
    //ເຫດການເກີດຂື້ນເມື່ອປ່ຽນຂໍ້ມູນໃນຟິວ 


    kintone.events.off(['app.record.create.show'], (event) => {
      Swal.fire(
        'ສ້າງ record ໃໝ່'
      )
    });
    //ເຫດການເກີດຂື້ນເມື່ອກົດປຸ່ມສ້າງ Record


    kintone.events.off(['app.record.create.submit'], (event) => {
      Swal.fire(
        'ສ້າງ record ສຳເລັດ'
      )
    });
    //ເຫດການເກີດຂື້ນເມື່ອເສບ in record


    kintone.events.off(['app.record.create.change.Radio_button'], (event) => {
      Swal.fire(
        'ເລືອກສຳເລັດ'
      )
    });
    //ເຫດການເກີດຂື້ນເມື່ອເລືອກເອົາບາງສີ່ບາງຢ່າງ


    kintone.events.off(['app.record.edit.show'], (event) => {
      Swal.fire(
        'ຕ້ອງການແກ້ໄຂຂໍ້ມູນບໍ່?'
      ) 
    });
    //ເຫດການເກີດຂື້ນເມື່ອດກົດແກ້ໄຂໃນ record


    kintone.events.off(['app.record.edit.submit'], function(event) {
      Swal.fire(
        'ສຳເລັດ',
      '',
      'success'
      ) 
    });
    //ເຫດການເກີດຂື້ນເມື່ອດກົດເສບໃນ record


    kintone.events.off(['app.record.edit.change.Radio_button'], (event) => {
      Swal.fire(
        'ເລືອກສຳເລັດ',
      '',
      'success'
      ) 
    });
    //ເຫດການເກີດຂື້ນເມື່ອດກົດເລືອກRadioໃນ record


    kintone.events.off(['app.record.detail.process.proceed'], (event) => {
      Swal.fire(
        'process work',
      'process',
      'success'
      ) 
    });
    //ເຫດການເກີດຂື້ນເມື່ອກົດປຸ່ມສະຕາສ

    // const handler = (event) => {
    //   let num1 = 2;
    //   let num2 = 2;
    //   total = num1 + num2;
    //   alert(total)
      
    // };
    // kintone.events.on('app.record.index.show', handler);

    


  

