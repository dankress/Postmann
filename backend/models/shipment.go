package models

import (
	"gorm.io/gorm"
)

type Shipment struct {
	gorm.Model
	TrackingNumber string `json:"trackingNumber"`
	Street         string `json:"street"`
	City           string `json:"city"`
	Zip            string `json:"zip"`
	Country        string `json:"country"`
	Status         string `json:"status"`
	Weight         string `json:"weight"`
}
