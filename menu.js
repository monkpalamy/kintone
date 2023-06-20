//ປະກາດຟຕປ່ຽນ
const container = document.createElement('div');
const divHide = document.createElement('a');
divHide.textContent='Hide';
const container_head1 = document.createElement('div');
const container_head2 = document.createElement('div');
const text1 = document.createElement('span');
text1.textContent='text1';
const inputElement1 = document.createElement('input');
const text2 = document.createElement('span');
text2.textContent='text2';
const text3 = document.createElement('span');
text3.textContent='text3';
const text4 = document.createElement('span');
text4.textContent='text4';
const text5 = document.createElement('span');
text5.textContent='text5';
const inputElement2 = document.createElement('input');
const inputElement3 = document.createElement('input');
const p1 = document.createElement('span');
p1.textContent = '~';
const inputElement4 = document.createElement('input');
// const br = document.createElement('br');
const inputElement5 = document.createElement('input');
const p2 = document.createElement('span');
p2.textContent = '~';
const inputElement6 = document.createElement('input');
const radio1 = document.createElement('input');
const And = document.createElement('span');
radio1.setAttribute('type','radio');
And.textContent = 'And';
const radio2 = document.createElement('input');
radio2.setAttribute('type','radio');
const Or = document.createElement('span');
Or.textContent = 'Or';
const btnS = document.createElement('button');
btnS.textContent="Save";
const btnC = document.createElement('button');
btnC.textContent="Cancel";

const select = document.createElement('select');
select.multiple = true;
select.size='3';
const optionA = document.createElement('option');
const optionB = document.createElement('option');
const optionC = document.createElement('option');
const optionD = document.createElement('option');

//ກຳນົດຕົວເລືອກໃຫ້select
optionA.text="A";
optionB.text="B";
optionC.text="C";
optionD.text="D";

//ເພີ່ມຕົວເລືອກເຂົ້າselect
select.add(optionA);
select.add(optionB);
select.add(optionC);
select.add(optionD);

//ເພີ່ມຂໍ້ມູນເຂົ້າ container
container.appendChild(divHide); 
container.appendChild(container_head1);
container_head1.appendChild(text1);
container_head1.appendChild(text2);
container_head1.appendChild(text3);
container_head1.appendChild(text4);
container_head2.appendChild(text5);
container.appendChild(inputElement1);
container.appendChild(inputElement2);
container.appendChild(select);
container.appendChild(inputElement3);
container.appendChild(p1);
container.appendChild(inputElement4);
// container.appendChild(br);
container.appendChild(container_head2);
container.appendChild(inputElement5);
container.appendChild(p2);
container.appendChild(inputElement6);
container.appendChild(radio1);
container.appendChild(And);
container.appendChild(radio2);
container.appendChild(Or);
container.appendChild(btnS);
container.appendChild(btnC);

//ກຳນົດສະຕາຍໃຫນ container
container.style.width='58em';
container.style.height='15em';
container.style.border='2px solid blue';
container.style.borderRadius='15px';
container.style.marginLeft='200px';
container.style.marginBottom='10px';
container.style.paddingLeft='20px';

//ກຳນົດສະຕາຍໃຫ້ container_head1
container_head1.style.width='80em';
container_head1.style.height='20px';
// container_head1.style.border='2px solid blue';
container_head1.style.paddingBottom='5px';

//ກຳນົດສະຕາຍໃຫ້ container_head2
container_head2.style.width='80em';
container_head2.style.height='20px';
// container_head2.style.border='2px solid blue';
container_head2.style.paddingBottom='5px';
container_head2.style.marginTop='2em';

//ກຳນົດສະຕາຍໃຫ້ container_head1
text2.style.marginLeft='160px';
text3.style.marginLeft='150px';
text4.style.marginLeft='20px';
inputElement1.style.marginRight='10px';
inputElement2.style.marginRight='10px';
select.style.marginRight='10px';
select.style.position='absolute';
inputElement3.style.marginRight='10px';
inputElement3.style.marginLeft='55px';
inputElement5.style.marginTop='5px';
inputElement5.style.marginRight='10px';
inputElement6.style.marginRight = '10em';
btnS.style.marginRight='1em';
p1.style.marginRight='10px';
p2.style.marginRight='10px';
radio1.style.marginRight='2px';
And.style.marginRight='30px';
radio2.style.marginRight='2px';
Or.style.marginRight='30px';
divHide.style.marginLeft='53em';
divHide.style.color='blue';

const element = kintone.app.getHeaderSpaceElement();
element.appendChild(container);



  