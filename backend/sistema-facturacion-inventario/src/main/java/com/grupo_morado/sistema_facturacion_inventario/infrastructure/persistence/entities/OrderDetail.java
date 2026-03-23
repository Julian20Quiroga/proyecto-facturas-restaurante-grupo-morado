package com.grupo_morado.sistema_facturacion_inventario.infrastructure.persistence.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name = "detalle_orden")
@Getter
@Setter
public class OrderDetail extends BaseEntity{

    @Column(name = "cantidad")
    private Integer quantity;

    @Column(name = "precio_unitario")
    private BigDecimal price;

    @Column(name = "observaciones")
    private String observation;

    @ManyToOne
    @JoinColumn(name = "id_orden")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "id_plato")
    private Dish dish;
}
