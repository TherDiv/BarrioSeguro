"use client"
import { SetStateAction, useState } from 'react';
import { Footer } from '@/components/Footer';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function BudgeCalculatorPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = useState("auto");

  const [numHogares, setNumHogares] = useState(150);
  const [numTesoreros, setNumTesoreros] = useState(1);
  const [numVigilantes, setNumVigilantes] = useState(0);
  const [numVehiculos, setNumVehiculos] = useState(0);
  const [numCaseta, setNumCaseta] = useState(0);
  const [numCamaras, setNumCamaras] = useState(0);
  const [numRejas, setNumRejas] = useState(0);

  const [costoInicial, setCostoInicial] = useState(0);
  const [costoMensual, setCostoMensual] = useState(0);

  const sueldo_huachiman = 1100;
  const sueldo_tesorero = 1000;
  const mantenimiento_garita = 10;
  const mantenimiento_rejas = 10;

  const precio_garita = 3000;
  const precio_reja = 700;
  const precio_camara = 400;


  const handleDecrease = (setter: { (value: SetStateAction<number>): void; (arg0: (prevValue: any) => number): void; }) => {
    setter((prevValue) => prevValue > 0 ? prevValue - 1 : 0);
  };

  const handleIncrease = (setter: { (value: SetStateAction<number>): void; (arg0: (prevValue: any) => any): void; }) => {
    setter((prevValue) => prevValue + 1);
  };

  const handleCalculate = () => {
    let costo_inicial = 0.0;
    let costo_mensual = 0.0;

    costo_mensual = ((sueldo_huachiman * numVigilantes) + (mantenimiento_garita * numCaseta) + (mantenimiento_rejas * numRejas) + (sueldo_tesorero * numTesoreros)) / numHogares;
    costo_inicial = ((precio_garita * numCaseta) + (precio_reja * numRejas) + (precio_camara * numCamaras)) / numHogares;

    setCostoInicial(costo_inicial);
    setCostoMensual(costo_mensual);
  }

  return (
    <div className="flex flex-col justify-center items-center">
            <Footer text='Presupuesto'></Footer>


<div className="flex flex-col items-center">
  <div className="flex items-center mb-2 gap-12 justify-between w-80">
    <span className='text-xl'>Nro de Hogares:</span>
    <div className="flex gap-2 bg-slate-400 items-center">
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumHogares)}>
        <HiMinusSm />

      </div>
      <span className='text-xl px-4'>{numHogares}</span>
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumHogares)}>
        <HiPlusSm />
      </div>
    </div>

  </div>
  {/* Repite este patrón para los otros campos de entrada */}
</div>

<div className="flex flex-col items-center mt-4">
  <div className="flex items-center mb-2 gap-12 justify-between w-80">
    <span className='text-xl'>Nro de Tesoreros:</span>
    <div className="flex gap-2 bg-slate-400 items-center">
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumTesoreros)}>
        <HiMinusSm />

      </div>
      <span className='text-xl px-4'>{numTesoreros}</span>
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumTesoreros)}>
        <HiPlusSm />
      </div>
    </div>

  </div>
  {/* Repite este patrón para los otros campos de entrada */}
</div>

<div className="flex flex-col items-center mt-4">
  <div className="flex items-center mb-2 gap-12 justify-between w-80">
    <span className='text-xl'>Nro de Vigilantes:</span>
    <div className="flex gap-2 bg-slate-400 items-center">
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumVigilantes)}>
        <HiMinusSm />

      </div>
      <span className='text-xl px-4'>{numVigilantes}</span>
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumVigilantes)}>
        <HiPlusSm />
      </div>
    </div>

  </div>
  {/* Repite este patrón para los otros campos de entrada */}
</div>

<div className="flex flex-col items-center mt-4">
  <div className="flex items-center mb-2 gap-12 justify-between w-80">
    <span className='text-xl'>Nro de Vehiculos de Vigilancia:</span>
    <div className="flex gap-2 bg-slate-400 items-center">
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumVehiculos)}>
        <HiMinusSm />

      </div>
      <span className='text-xl px-4'>{numVehiculos}</span>
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumVehiculos)}>
        <HiPlusSm />
      </div>
    </div>

  </div>
  {/* Repite este patrón para los otros campos de entrada */}
</div>

<div className="flex flex-col items-center mt-4">
  <div className="flex items-center mb-2 gap-12 justify-between w-80">
    <span className='text-xl'>Nro de Casetas de Vigilancia:</span>
    <div className="flex gap-2 bg-slate-400 items-center">
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumCaseta)}>
        <HiMinusSm />

      </div>
      <span className='text-xl px-4'>{numCaseta}</span>
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumCaseta)}>
        <HiPlusSm />
      </div>
    </div>

  </div>
  {/* Repite este patrón para los otros campos de entrada */}
</div>

<div className="flex flex-col items-center mt-4">
  <div className="flex items-center mb-2 gap-12 justify-between w-80">
    <span className='text-xl'>Nro de Camaras de Vigilancia:</span>
    <div className="flex gap-2 bg-slate-400 items-center">
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumCamaras)}>
        <HiMinusSm />

      </div>
      <span className='text-xl px-4'>{numCamaras}</span>
      <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumCamaras)}>
        <HiPlusSm />
      </div>
    </div>

  </div>
  <div className="flex flex-col items-center mt-4">
    <div className="flex items-center mb-2 gap-12 justify-between w-80">
      <span className='text-xl'>Nro de Rejas:</span>
      <div className="flex gap-2 bg-slate-400 items-center">
        <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleDecrease(setNumRejas)}>
          <HiMinusSm />

        </div>
        <span className='text-xl px-4'>{numRejas}</span>
        <div className="rounded bg-slate-200 flex justify-center align-center px-4 py-3 cursor-pointer" onClick={() => handleIncrease(setNumRejas)}>
          <HiPlusSm />
        </div>
      </div>

    </div>
    {/* Repite este patrón para los otros campos de entrada */}
  </div>
</div>

      {/* Aquí van los inputs para ingresar datos */}

      <Button color="success" className="mt-12 mb-2 px-24 py-8" onClick={() => {
        handleCalculate();
        onOpen(); // Abrir modal después de calcular
      }}>
        <p className="text-xl">
          Calcular
        </p>
      </Button>

      <div className="flex flex-col gap-2">
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Presupuesto</ModalHeader>
                <ModalBody>
                  <p> <b>Inicial:</b> {costoInicial}</p>
                  <p> <b>Pago mensual por vecino:</b> {costoMensual}</p>
                  {/* Otros detalles del presupuesto */}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Copiar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
