package models

import (
	"gorm.io/gorm"
)

type Packagestation struct {
	gorm.Model
	Number  string `json:"number"`
	Street  string `json:"street"`
	City    string `json:"city"`
	Zip     string `json:"zip"`
	Country string `json:"country"`
	Status  string `json:"status"`
}
