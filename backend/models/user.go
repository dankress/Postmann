package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Postnumber string `json:"postnumber"`
	FirstName  string `json:"firstName"`
	Name       string `json:"name"`
	Street     string `json:"street"`
	City       string `json:"city"`
	Zip        string `json:"zip"`
	Country    string `json:"country"`
	Status     string `json:"status"`
}
