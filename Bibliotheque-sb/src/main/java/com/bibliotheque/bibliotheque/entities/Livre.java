package com.bibliotheque.bibliotheque.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Livre {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String Name;
	boolean dispo;
	@ManyToOne
	@JsonBackReference 			//permet d'éviter une boucle infinie avec la requete GET mise sur @manytoone
	private Bibliotheque bibliotheque;
	
	
}
