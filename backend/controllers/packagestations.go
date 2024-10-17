package controllers

import (
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	"backend/models"
)

// GetPackagestations returns all packagestations in the database
func GetPackagestations(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var packagestations []models.Packagestation
	models.DB.Find(&packagestations)
	json.NewEncoder(w).Encode(packagestations)
}

// GetPackagestationByNumber returns a packagestation with a specific number
func GetPackagestationByNumber(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var packagestation models.Packagestation
	if err := models.DB.First(&packagestation, "number = ?", params["number"]).Error; err != nil {
		http.Error(w, "Packagestation not found", http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(packagestation)
}

// AddPackagestation adds a new packagestation to the database
func AddPackagestation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var packagestation models.Packagestation
	if err := json.NewDecoder(r.Body).Decode(&packagestation); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	if err := models.DB.Create(&packagestation).Error; err != nil {
		http.Error(w, "Could not create packagestation", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(packagestation)
}

// UpdatePackagestation updates a packagestation with a specific number
func UpdatePackagestation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var packagestation models.Packagestation
	if err := models.DB.First(&packagestation, "number = ?", params["number"]).Error; err != nil {
		http.Error(w, "Packagestation not found", http.StatusNotFound)
		return
	}
	if err := json.NewDecoder(r.Body).Decode(&packagestation); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	if err := models.DB.Save(&packagestation).Error; err != nil {
		http.Error(w, "Could not update packagestation", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(packagestation)
}

// DeletePackagestation deletes a packagestation with a specific number
func DeletePackagestation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var packagestation models.Packagestation
	if err := models.DB.First(&packagestation, "number = ?", params["number"]).Error; err != nil {
		http.Error(w, "Packagestation not found", http.StatusNotFound)
		return
	}
	if err := models.DB.Delete(&packagestation).Error; err != nil {
		http.Error(w, "Could not delete packagestation", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(packagestation)
}
