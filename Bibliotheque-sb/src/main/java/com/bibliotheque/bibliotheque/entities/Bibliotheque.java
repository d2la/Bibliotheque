package com.bibliotheque.bibliotheque.entities;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Bibliotheque {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	@Column(length = 1000)
	private String description;
	private String photo;
	private int adherent;			
	//relation livre
	@OneToMany(mappedBy = "bibliotheque") 	// bibliotheque est le nom du champ dans l'autre table (mappedby = correspondance)
	@JsonManagedReference					//permet d'éviter une boucle infinie avec la requete GET
	private Collection<Livre> livres;		// on utilise collection pour les clefs etrangeres et non list

}
