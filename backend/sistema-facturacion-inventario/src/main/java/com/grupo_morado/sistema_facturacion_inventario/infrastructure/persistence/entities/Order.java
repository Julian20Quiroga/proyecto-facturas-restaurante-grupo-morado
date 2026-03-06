package com.grupo_morado.sistema_facturacion_inventario.infrastructure.persistence.entities;

import com.grupo_morado.sistema_facturacion_inventario.domain.model.enums.OrderStatusEnum;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
public class Order extends BaseEntity{
    private OrderStatusEnum status;
    private BigDecimal subtotal;
    private BigDecimal consumptionTax;
    private BigDecimal total;

    @ManyToOne
    private Table table;
    @ManyToOne
    private User waiter;
}