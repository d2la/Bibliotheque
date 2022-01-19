package com.bibliotheque.bibliotheque;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.bibliotheque.bibliotheque.dao.BibliothequeRepository;
import com.bibliotheque.bibliotheque.dao.LivreRepository;
import com.bibliotheque.bibliotheque.entities.Bibliotheque;
import com.bibliotheque.bibliotheque.entities.Livre;

import net.bytebuddy.utility.RandomString;

@SpringBootApplication
public class BibliothequeApplication implements CommandLineRunner {

	@Autowired //etablissment connexion
	private BibliothequeRepository br; //permet d'acceder au requeteur JPA
	@Autowired //connexion avec repository de livre
	private LivreRepository lr;
	
	
	@Autowired
	private RepositoryRestConfiguration rrc; //recupereration id et permet son affichage

	
	
	public static void main(String[] args) {
		SpringApplication.run(BibliothequeApplication.class, args);				
		System.out.println("coucou");
	}



	@Override
	public void run(String... args) throws Exception {
		rrc.exposeIdsFor(Bibliotheque.class); //affichage de l'id imperatif pour le crud

		int nameChar = 10;
		int descriChar = 200;
		int adherMin=0;
		int adherMax = 100;
		
		int nbB = 100;
		int nbL = 10;
		
		for(int i = 0; i<nbB; i++) {
			int alea = adherMin + (int)(Math.random() * ((adherMax - adherMin) + 1));
			br.save( new Bibliotheque(
				null,
				RandomString.make(nameChar),
				RandomString.make(descriChar),
				"images.jpg",
				alea,
				null
			));			
		}
		
		br.findAll().forEach(b->{
			for(int i=0;i<nbL;i++) {
				Boolean [] tab = {true, false};
				int alea = 0 + (int)(Math.random() * ((1 - 0) + 1));
				
				lr.save(new Livre(
					null,
					RandomString.make(nameChar),
					tab[alea],
					b			// pour la clef exterieure on ne mets pas l'id mais l'objet		
				));
			}
		});

		
//		br.save(new Bibliotheque(
//				null,
//				"Bibliothèque Municipale de Marseille",
//				"elle est pourrie",
//				"photo1.jpeg",
//				12
//		));
//		br.save(new Bibliotheque(
//				null,
//				"Bibliothèque Municipale de Aix",
//				"elle est bien",
//				"photo2.jpeg",
//				15
//		));
//		
//		
	}	 
}
