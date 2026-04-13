import { useState } from "react";
import DashboardLayout from "../../templates/DashboardLayout.jsx";
import PageHeader      from "../../global/components/PageHeader.jsx";
import Badge           from "../../global/components/Badge.jsx";
import Button          from "../../global/components/Button.jsx";
import Modal           from "../../global/components/Modal.jsx";
import MenuForm        from "./components/MenuForm.jsx";

const MENUS = [
  { id: 1, nombre: "Desayunos", platos: 6,  activo: true  },
  { id: 2, nombre: "Almuerzos", platos: 12, activo: true  },
  { id: 3, nombre: "Cenas",     platos: 8,  activo: true  },
  { id: 4, nombre: "Bebidas",   platos: 10, activo: true  },
  { id: 5, nombre: "Postres",   platos: 4,  activo: false },
];

export default function Menus() {
  const [showModal, setShowModal] = useState(false);

  return (
    <DashboardLayout screenName="Gestión de Menús" activeItem="menus">
      <PageHeader
        title="Gestión de Menús"
        actionLabel="+ Crear Menú"
        onAction={() => setShowModal(true)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MENUS.map((m) => (
          <div
            key={m.id}
            className={`bg-white rounded-xl p-5 shadow-sm border-t-4 ${
              m.activo ? "border-[#E87722]" : "border-gray-300"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-black text-gray-900 text-base">{m.nombre}</h3>
              {m.activo
                ? <Badge variant="success">Activo</Badge>
                : <Badge>Inactivo</Badge>}
            </div>
            <p className="text-sm text-gray-500 mb-4">{m.platos} platos registrados</p>
            <div className="flex gap-2">
              <Button small>Editar</Button>
              {m.activo
                ? <Button small variant="danger">Desactivar</Button>
                : <Button small variant="success">Reactivar</Button>}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <Modal title="Crear Menú" onClose={() => setShowModal(false)} size="sm">
          <MenuForm onCancel={() => setShowModal(false)} />
        </Modal>
      )}
    </DashboardLayout>
  );
}
