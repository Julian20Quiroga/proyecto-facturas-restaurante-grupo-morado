package com.grupo_morado.sistema_facturacion_inventario.infrastructure.persistence.entities;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.sql.Timestamp;

@MappedSuperclass
@Getter
@EnableJpaAuditing
public class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @CreatedDate
    private Timestamp createdAt;
    @LastModifiedDate
    private Timestamp updatedAt;
}
