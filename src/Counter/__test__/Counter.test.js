import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

let getByTestId

beforeEach(()=>{
     const component = render(<Counter/>)
     getByTestId = component.getByTestId;
})

test('Header renders with correct text ', () => {
     
     const header = getByTestId('header')
     expect(header.textContent).toBe('My Counter')
})

test('counter start at zero ', () => {
     const counterNum = getByTestId('counterNum');
     expect(counterNum.textContent).toBe('0')

})

test('input start at one ', () => {
     const input = getByTestId('input');

     expect(input.value).toBe('1')
     
})

test('Add button renders with + ', () => {
     const addBtn = getByTestId('addBtn');

     expect(addBtn.textContent).toBe('+')
     
})

test('subtract button renders with - ', () => {
     const subBtn = getByTestId('subBtn');

     expect(subBtn.textContent).toBe('-')
     
})

test('Change input to any value', () => {
     const input = getByTestId('input');

     expect(input.value).toBe('1')
     fireEvent.change(input, {
          target:{
               value:'5'
          }
     })

     expect(input.value).toBe('5')
     
})

test('Click on add button add input value to counter ', () => {
     const addBtn = getByTestId('addBtn');
     const counterNum = getByTestId('counterNum');

     expect(counterNum.textContent).toBe('0')
     fireEvent.click(addBtn,)
     expect(counterNum.textContent).toBe('1')
     
})

test('Click on sub button add input value to counter ', () => {
     
     const subBtn = getByTestId('subBtn');
     const counterNum = getByTestId('counterNum');

     expect(counterNum.textContent).toBe('0')
     fireEvent.click(subBtn,)
     expect(counterNum.textContent).toBe('-1')
     
})

test('change Input value then click on add button ', () => {
     const addBtn = getByTestId('addBtn');
     const counterNum = getByTestId('counterNum');
     const input = getByTestId('input');

     fireEvent.change(input,{
          target:{
               value:'5'
          }
     })
     fireEvent.click(addBtn,)
     expect(counterNum.textContent).toBe('5')
     
})

test('change Input value then click on subtract button ', () => {
     const subBtn = getByTestId('subBtn');
     const counterNum = getByTestId('counterNum');
     const input = getByTestId('input');

     fireEvent.change(input,{
          target:{
               value:'5'
          }
     })
     fireEvent.click(subBtn,)
     expect(counterNum.textContent).toBe('-5')
     
})


test('Counter element contain right className ', () => {
     const addBtn = getByTestId('addBtn');
     const subBtn = getByTestId('subBtn');
     const counterNum = getByTestId('counterNum');
     const input = getByTestId('input');

     expect(counterNum.className).toBe('')

     fireEvent.change(input,{
          target:{
               value:'50'
          }
     })
     fireEvent.click(addBtn)
     expect(counterNum.className).toBe('')
     fireEvent.click(addBtn)
     expect(counterNum.className).toBe('green')
     fireEvent.click(addBtn)
     expect(counterNum.className).toBe('green')
     fireEvent.click(subBtn)
     fireEvent.click(subBtn)

     expect(counterNum.className).toBe('')

     fireEvent.click(subBtn)
     fireEvent.click(subBtn)
     fireEvent.click(subBtn)
     fireEvent.click(subBtn)

     expect(counterNum.className).toBe('red')
})