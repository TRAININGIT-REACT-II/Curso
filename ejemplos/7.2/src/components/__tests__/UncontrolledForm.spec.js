import React from "react";
import { render, mount } from "enzyme";

import UncontrolledForm from "../UncontrolledForm";

describe(UncontrolledForm, () => {
  describe("Render", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = render(<UncontrolledForm />);
    });

    it("agrega los elementos HTML", () => {
      // Comprobamos los distintos aspectos de HTML
      expect(wrapper.find("form").length).toBe(1);
      expect(wrapper.find("label").length).toBe(2);
      expect(wrapper.find('input[type="text"]').length).toBe(1);
      expect(wrapper.find('input[type="color"]').length).toBe(1);
      expect(wrapper.find("button").length).toBe(1);
    });

    it("muestra", () => {
      // Comprobamos el texto
      expect(wrapper.find(".uncontrolled_result_name").text()).toBe("");
      expect(wrapper.find(".uncontrolled_result_color").text()).toBe("");
    });
  });

  describe("Funcionalidades", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = mount(<UncontrolledForm />);
    });

    it("Actualiza el valor cuando se hace Submit", () => {
      // Al igual que los anteriores, también necesitamos utilizar mount, ya que
      // vamos a modificar el valor del input

      // Actualizamos el nombre
      const newName = "newName";
      const input = wrapper.find("#uncontrolled-name");
      input.instance().value = newName;
      // Para controlados, necesitamos lanzar el evento
      // input.simulate("change", { target: { value: newName } });

      // Acutalizamos el color
      const newColor = "#ff0000";
      const colorInput = wrapper.find("#uncontrolled-color");
      colorInput.instance().value = newColor;

      // Simulamos el envío del formulario
      wrapper.find("form").simulate("submit");

      // Comprobamos que se muestran los valores
      expect(wrapper.find(".uncontrolled_result_name").text()).toEqual(newName);
      expect(wrapper.find(".uncontrolled_result_color").text()).toEqual(
        newColor
      );
    });
  });
});
