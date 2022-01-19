package com.bibliotheque.bibliotheque.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bibliotheque.bibliotheque.dao.LivreRepository;
import com.bibliotheque.bibliotheque.entities.Livre;


@CrossOrigin("*")
@RestController
public class LivreServices {
	@Autowired
	LivreRepository lr;
	
	@GetMapping("/getLivres")
	public List<Livre> getLivres () {
		System.out.println(lr.findAll());
		return lr.findAll();
	}
	
	@GetMapping("/getLivresByBibliotheque/{idbibi}")
	public List<Livre> getLivresByBibliotheque(@PathVariable("idbibi") Long idBibi){
		
		return lr.findByBibliothequeId(idBibi);
	}

}
