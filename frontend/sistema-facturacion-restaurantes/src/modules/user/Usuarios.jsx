import { useState } from "react";
import DashboardLayout from "../../templates/DashboardLayout.jsx";
import PageHeader      from "../../global/components/PageHeader.jsx";
import SearchBar       from "../../global/components/SearchBar.jsx";
import DataTable       from "../../global/components/DataTable.jsx";
import Badge           from "../../global/components/Badge.jsx";
import Button          from "../../global/components/Button.jsx";
import Modal           from "../../global/components/Modal.jsx";
import UserForm        from "./components/UserForm.jsx";

const USERS = [
  { id: 1, nombre: "Juan García",      email: "juan@sfr.com",   rol: "Administrador", activo: true  },
  { id: 2, nombre: "Laura Martínez",   email: "laura@sfr.com",  rol: "Mesero",        activo: true  },
  { id: 3, nombre: "Carlos Rodríguez", email: "carlos@sfr.com", rol: "Chef",          activo: true  },
  { id: 4, nombre: "Ana López",        email: "ana@sfr.com",    rol: "Cajero",        activo: false },
];

export default function Usuarios() {
  const [showModal, setShowModal] = useState(false);

  const rows = USERS.map((u) => [
    u.id,
    u.nombre,
    u.email,
    u.rol,
    u.activo
      ? <Badge variant="success">Activo</Badge>
      : <Badge>Inactivo</Badge>,
    <div className="flex gap-1.5">
      <Button small variant="ghost">Ver</Button>
      <Button small>Editar</Button>
      {u.activo
        ? <Button small variant="danger">Desactivar</Button>
        : <Button small variant="success">Reactivar</Button>}
    </div>,
  ]);

  return (
    <DashboardLayout screenName="Gestión de Usuarios" activeItem="usuarios">
      <PageHeader
        title="Gestión de Usuarios"
        actionLabel="+ Registrar Usuario"
        onAction={() => setShowModal(true)}
      />

      <div className="bg-white rounded-xl p-5 shadow-sm">
        <SearchBar
          placeholder="Buscar por nombre o correo..."
          filters={[
            { options: ["Todos los roles", "Administrador", "Mesero", "Chef", "Cajero"] },
            { options: ["Todos", "Activos", "Inactivos"] },
          ]}
        />
        <DataTable
          columns={["ID", "Nombre", "Correo", "Rol", "Estado", "Acciones"]}
          rows={rows}
        />
      </div>

      {showModal && (
        <Modal title="Registrar Nuevo Usuario" onClose={() => setShowModal(false)}>
          <UserForm onCancel={() => setShowModal(false)} />
        </Modal>
      )}
    </DashboardLayout>
  );
}
