package com.grupo_morado.sistema_facturacion_inventario.infrastructure.persistence.entities;

import com.grupo_morado.sistema_facturacion_inventario.domain.model.enums.DisponibilityStateEnum;
import com.grupo_morado.sistema_facturacion_inventario.domain.model.enums.StatusEnum;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Table extends  BaseEntity{
    private Integer number;
    private DisponibilityStateEnum disponibility;
    private StatusEnum status;
}
