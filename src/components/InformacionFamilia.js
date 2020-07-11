import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  DropdownToggle,
  InputGroupButtonDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const InformacionFamilia = (props) => {
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);
  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
  return (
    <div>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Familia: </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Apellidos" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input
              addon
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Familia autorizada para adopcion" />
      </InputGroup>

      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Ingresos Mensuales</InputGroupText>
        </InputGroupAddon>
        <Input placeholder=" $ Cantidad de Ingresos Mensuales totales de la familia" />
        <InputGroupAddon addonType="append">
          <InputGroupText>MXN</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Gastos Mensuales</InputGroupText>
        </InputGroupAddon>
        <Input placeholder=" $ Cantidad de Gastos Mensuales totales de la familia" />
        <InputGroupAddon addonType="append">
          <InputGroupText>MXN</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButtonDropdown
          addonType="prepend"
          isOpen={splitButtonOpen}
          toggle={toggleSplit}
        >
          <Button outline>Vivienda</Button>
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem>Propia</DropdownItem>
            <DropdownItem>En Credito</DropdownItem>
            <DropdownItem>Familiar</DropdownItem>
            <DropdownItem>Arrendamiento</DropdownItem>
            <DropdownItem>Desconocido</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input placeholder="Propiedad de la vivienda" />
      </InputGroup>

      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default InformacionFamilia;
