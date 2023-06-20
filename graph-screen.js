kintone.events.off(['app.report.show'], (event) => {
    Swal.fire(
      'graph report work',
    'process',
    'success'
    ) 
  });
  

  kintone.events.off('app.record.print.show', function(event) {
    alert('ເຈົ້າຕ້ອງການປຣີ້ນເອກກະສານຫຼືບໍ່');
  });

  
  
  