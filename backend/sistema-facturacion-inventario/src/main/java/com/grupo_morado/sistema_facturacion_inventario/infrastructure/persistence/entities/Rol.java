package com.grupo_morado.sistema_facturacion_inventario.infrastructure.persistence.entities;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Rol extends BaseEntity{
    private String name;
}
