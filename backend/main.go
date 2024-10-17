package main

import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
	"backend/controllers"
)

func main() {
	router := mux.NewRouter()

	// Define routes
	router.HandleFunc("/packagestations", controllers.GetPackagestations).Methods("GET")
	router.HandleFunc("/packagestations", controllers.AddPackagestation).Methods("POST")
	router.HandleFunc("/packagestations/{number}", controllers.GetPackagestationByNumber).Methods("GET")
	router.HandleFunc("/packagestations/{number}", controllers.UpdatePackagestation).Methods("PATCH")
	router.HandleFunc("/packagestations/{number}", controllers.DeletePackagestation).Methods("DELETE")

	router.HandleFunc("/shipments", controllers.GetShipments).Methods("GET")
	router.HandleFunc("/shipments", controllers.AddShipment).Methods("POST")
	router.HandleFunc("/shipments/{trackingNumber}", controllers.GetShipmentByTrackingNumber).Methods("GET")
	router.HandleFunc("/shipments/{trackingNumber}", controllers.UpdateShipment).Methods("PATCH")
	router.HandleFunc("/shipments/{trackingNumber}", controllers.DeleteShipment).Methods("DELETE")

	router.HandleFunc("/users", controllers.GetUsers).Methods("GET")
	router.HandleFunc("/users", controllers.AddUser).Methods("POST")
	router.HandleFunc("/users/{postnumber}", controllers.GetUserByPostnumber).Methods("GET")
	router.HandleFunc("/users/{postnumber}", controllers.UpdateUser).Methods("PATCH")
	router.HandleFunc("/users/{postnumber}", controllers.DeleteUser).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":4000", router))
}
