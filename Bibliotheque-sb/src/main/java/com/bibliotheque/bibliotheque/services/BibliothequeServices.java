package com.bibliotheque.bibliotheque.services;


import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.bibliotheque.bibliotheque.dao.BibliothequeRepository;
import com.bibliotheque.bibliotheque.entities.Bibliotheque;

@CrossOrigin("*")
@RestController
public class BibliothequeServices {
	@Autowired
	private BibliothequeRepository br;
	
	@GetMapping("/getbibliotheques")
	public List<Bibliotheque> getBibliotheques(){
		System.out.println(br.findAll());
		return br.findAll();
	}
	
//	@GetMapping("/toto")
//	public String test() {
//		System.out.println("ok");
//		return "ok";
//	}
	
	@GetMapping("/getbibliotheque/search/{id}")
	public List<Bibliotheque> getBibliotheque(@PathVariable("id") Long id) {
		System.out.println(br.findById(id).orElse(null));
		//pour pouvoir etre afficher dans angular le NGFOR veut une list et non un simple objet
		List<Bibliotheque> bibi= new ArrayList<> ();//creation ed la liste
		bibi.add(br.findById(id).orElse(null))  ; //ajouter de la requete dans liste
		return bibi;  //renvoie de la liste
		
	}
	
	@PostMapping("/getbibliotheques")
	public boolean addBibliotheque(@RequestBody Bibliotheque b) {
		boolean test=false;
//		br.save(b);
//		System.out.println("bien enregistré");
//		if(br.existsById(b.getId())) {
//			test=true;
//		}
		if(br.save(b) != null) {
			test=true;
		}
		return test;
	}
	
	@DeleteMapping("/getbibliotheques/{id}")
	public void  supBibliotheque(@PathVariable("id") Long id){
	
		br.deleteById(id);

	}
	
	
	@PutMapping("/getbibliotheques/{id}") //il est aussi possible de saisir @RequestMapping(value="/putBibliotheque/{id}", method = RequestMethod.PUT)
	public Bibliotheque putBibliotheque (@PathVariable("id") Long id, @RequestBody Bibliotheque b){
		//@pathvariable permet de recuperer l'id dans l'url
		//requestbody permet de recuperer les infos dans l'objet envoyé (exception id)
		b.setId(id);
		return br.save(b);
	}
	
	@PatchMapping("/getbibliotheques/{id}")
	public Bibliotheque patchBibliotheque (@PathVariable("id") Long id, @RequestBody Bibliotheque b) {
		Bibliotheque b2=br.findById(id).orElse(null);
		b.setName(b2.getName());
		return br.save(b);
	}
	
	//requeteur personnalisé jpa dans le repository
	@GetMapping("/getbibliotheques/search/{item},{kw}")	
	public  List<Bibliotheque> searchB(@PathVariable String item, @PathVariable String kw){
		System.out.println(item+" : "+kw);
		Integer kwNbI;
	
		List<Bibliotheque> bibi = new ArrayList<>();
		
		switch(item) {
			case "name":
				System.out.println(item+" : "+kw);
				bibi= br.findByNameContaining(kw);
				break;
			case "description":
				System.out.println(item+" : "+kw);
				bibi= br.findByDescriptionContainingIgnoreCase(kw);
				break;
			
				
		}
		System.out.println(bibi);
		return bibi;
	}
		@GetMapping("/getbibliotheques/searchBetween/{min},{max}")	
		public  List<Bibliotheque> searchBetween(@PathVariable int min, @PathVariable int max){			
				System.out.println("min : "+min);				
				System.out.println("max : "+max);
				return br.findByAdherentBetween(min,max);

				
	}
	
}
