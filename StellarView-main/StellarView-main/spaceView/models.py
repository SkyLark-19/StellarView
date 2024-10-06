from django.db import models

class planet(models.Model):
    name = models.CharField(max_length=100)
    PlanetName = models.CharField(max_length=100)
    HostName = models.CharField(max_length=100)
    NumberofStars = models.IntegerField
    NumberofPlanets = models.IntegerField
    OrbitalPeriod_days = models.FloatField
    OrbitSemi_MajorAxis_au =  models.FloatField
    PlanetRadius_EarthRadius = models.FloatField
    PlanetMassorMass_sin_i_EarthMass = models.FloatField
    Eccentricity = models.FloatField
    InsolationFlux_EarthFlux = models.FloatField
    EquilibriumTemperature_K = models.FloatField
    StellarSurface_Gravity_log10cm_s_2 = models.FloatField
    RA_deg = models.FloatField
    Dec_deg = models.FloatField
    Distance_pc = models.FloatField
    V_Johnson_Magnitude = models.FloatField
    Ks_2MASS_Magnitude = models.FloatField
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.name
