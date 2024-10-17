package controllers

import (
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	"backend/models"
)

// GetShipments returns all shipments in the database
func GetShipments(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var shipments []models.Shipment
	models.DB.Find(&shipments)
	json.NewEncoder(w).Encode(shipments)
}

// GetShipmentByTrackingNumber returns a shipment with a specific tracking number
func GetShipmentByTrackingNumber(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var shipment models.Shipment
	if err := models.DB.First(&shipment, "tracking_number = ?", params["trackingNumber"]).Error; err != nil {
		http.Error(w, "Shipment not found", http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(shipment)
}

// AddShipment adds a new shipment to the database
func AddShipment(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var shipment models.Shipment
	if err := json.NewDecoder(r.Body).Decode(&shipment); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	if err := models.DB.Create(&shipment).Error; err != nil {
		http.Error(w, "Could not create shipment", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(shipment)
}

// UpdateShipment updates a shipment with a specific tracking number
func UpdateShipment(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var shipment models.Shipment
	if err := models.DB.First(&shipment, "tracking_number = ?", params["trackingNumber"]).Error; err != nil {
		http.Error(w, "Shipment not found", http.StatusNotFound)
		return
	}
	if err := json.NewDecoder(r.Body).Decode(&shipment); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	if err := models.DB.Save(&shipment).Error; err != nil {
		http.Error(w, "Could not update shipment", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(shipment)
}

// DeleteShipment deletes a shipment with a specific tracking number
func DeleteShipment(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var shipment models.Shipment
	if err := models.DB.First(&shipment, "tracking_number = ?", params["trackingNumber"]).Error; err != nil {
		http.Error(w, "Shipment not found", http.StatusNotFound)
		return
	}
	if err := models.DB.Delete(&shipment).Error; err != nil {
		http.Error(w, "Could not delete shipment", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(shipment)
}
