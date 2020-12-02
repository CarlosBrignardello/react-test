import React from 'react'
import { shallow } from 'enzyme'
import CreateUser from '../pages/CreateUser'

describe('Pruebas con POST al API', () => {

  const wrapper = shallow( <CreateUser /> )

    test('La etiqueta <small> debe tener el mismo contenido que el inputName', () => {
      const input = wrapper.find('input').at(0)
      const value = "Carlos"
      input.simulate('change', { target: { value } })
      
      expect(wrapper.find('small').text() ).toBe( `Se registrarará como: ${value}` )
    })
})