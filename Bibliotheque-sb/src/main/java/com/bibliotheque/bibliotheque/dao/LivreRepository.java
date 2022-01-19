package com.bibliotheque.bibliotheque.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.bibliotheque.bibliotheque.entities.Livre;

@RestController
@CrossOrigin("*")
public interface LivreRepository extends JpaRepository<Livre, Long> {
	
	List<Livre>  findByBibliothequeId(Long idBibi);

}
