package controllers

import (
	"encoding/json"
	"net/http"
	"github.com/gorilla/mux"
	"backend/models"
)

// GetUsers returns all users in the database
func GetUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var users []models.User
	models.DB.Find(&users)
	json.NewEncoder(w).Encode(users)
}

// GetUserByPostnumber returns a user with a specific postnumber
func GetUserByPostnumber(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var user models.User
	if err := models.DB.First(&user, "postnumber = ?", params["postnumber"]).Error; err != nil {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(user)
}

// AddUser adds a new user to the database
func AddUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	if err := models.DB.Create(&user).Error; err != nil {
		http.Error(w, "Could not create user", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(user)
}

// UpdateUser updates a user with a specific postnumber
func UpdateUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var user models.User
	if err := models.DB.First(&user, "postnumber = ?", params["postnumber"]).Error; err != nil {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}
	if err := models.DB.Save(&user).Error; err != nil {
		http.Error(w, "Could not update user", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(user)
}

// DeleteUser deletes a user with a specific postnumber
func DeleteUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var user models.User
	if err := models.DB.First(&user, "postnumber = ?", params["postnumber"]).Error; err != nil {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}
	if err := models.DB.Delete(&user).Error; err != nil {
		http.Error(w, "Could not delete user", http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(user)
}
