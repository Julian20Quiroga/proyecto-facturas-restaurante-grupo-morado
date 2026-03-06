package com.grupo_morado.sistema_facturacion_inventario.infrastructure.persistence.entities;

import com.grupo_morado.sistema_facturacion_inventario.domain.model.enums.StatusEnum;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
    private String name;
    private String lastname;
    private String email;
    private String password;
    private StatusEnum status;

    @ManyToOne
    private Rol role;
}
