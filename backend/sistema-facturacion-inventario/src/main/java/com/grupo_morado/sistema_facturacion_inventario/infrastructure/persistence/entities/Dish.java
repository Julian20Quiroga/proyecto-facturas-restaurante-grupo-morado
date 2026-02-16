package com.grupo_morado.sistema_facturacion_inventario.infrastructure.persistence.entities;

import com.grupo_morado.sistema_facturacion_inventario.domain.model.enums.StatusEnum;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
public class Dish extends BaseEntity{
    private String name;
    private String description;
    private BigDecimal price;
    private Integer stock;
    private StatusEnum status;

    @ManyToOne
    private Menu menu;
}
