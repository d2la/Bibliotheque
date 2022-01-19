package com.bibliotheque.bibliotheque.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.bibliotheque.bibliotheque.entities.Bibliotheque;


@RestController //envoie au format json
@CrossOrigin("*") // autorisation d'acces à à angular 
public interface BibliothequeRepository extends JpaRepository<Bibliotheque, Long>{
	//enrichie la bibliotheque des requetes jpa
	List<Bibliotheque> findByNameContaining(String kw);
	List<Bibliotheque> findByDescriptionContainingIgnoreCase(String kw);
	List<Bibliotheque> findByAdherentBetween(int min, int max );

	
}
