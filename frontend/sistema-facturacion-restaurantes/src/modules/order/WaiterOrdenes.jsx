/**
 * modules/order/WaiterOrdenes.jsx
 * ─────────────────────────────────
 * Vista de órdenes del mesero.
 * Rol: Mesero
 */

import { useState } from "react";
import DashboardLayout from "../../templates/DashboardLayout.jsx";
import PageHeader      from "../../global/components/PageHeader.jsx";
import DataTable       from "../../global/components/DataTable.jsx";
import Badge           from "../../global/components/Badge.jsx";
import Button          from "../../global/components/Button.jsx";
import Modal           from "../../global/components/Modal.jsx";
import OrderForm       from "./components/OrderForm.jsx";

const ORDENES = [
  { id: "#042", mesa: "Mesa 3", platos: 2, subtotal: "$85.000",  estado: "lista" },
  { id: "#041", mesa: "Mesa 7", platos: 3, subtotal: "$120.000", estado: "en_preparacion" },
  { id: "#038", mesa: "Mesa 2", platos: 1, subtotal: "$32.000",  estado: "en_preparacion" },
];

const ESTADO_BADGE = {
  en_preparacion: <Badge variant="warning">En preparación</Badge>,
  lista:          <Badge variant="success">Lista</Badge>,
  cancelada:      <Badge variant="danger">Cancelada</Badge>,
};

export default function MeseroOrdenes() {
  const [showModal, setShowModal] = useState(false);

  const rows = ORDENES.map((o) => [
    o.id,
    o.mesa,
    `${o.platos} plato${o.platos !== 1 ? "s" : ""}`,
    o.subtotal,
    ESTADO_BADGE[o.estado],
    <div className="flex gap-1.5">
      <Button small variant="ghost">Ver</Button>
      {o.estado !== "lista" && <Button small>Editar</Button>}
      {o.estado !== "lista" && <Button small variant="danger">Cancelar</Button>}
    </div>,
  ]);

  return (
    <DashboardLayout screenName="Mis Órdenes" activeItem="ordenes">
      <PageHeader
        title="Mis Órdenes"
        actionLabel="+ Nueva Orden"
        onAction={() => setShowModal(true)}
      />

      <div className="bg-white rounded-xl p-5 shadow-sm">
        <DataTable
          columns={["# Orden", "Mesa", "Platos", "Subtotal", "Estado", "Acciones"]}
          rows={rows}
        />
      </div>

      {showModal && (
        <Modal title="Registrar Nueva Orden" onClose={() => setShowModal(false)}>
          <OrderForm onCancel={() => setShowModal(false)} />
        </Modal>
      )}
    </DashboardLayout>
  );
}
