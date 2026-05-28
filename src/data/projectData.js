// Import icons dari assets
import arcgisIcon from "../assets/logo_arcgis.png";
import autocadIcon from "../assets/logo_autocad.png";
import GEEicon from "../assets/logo_gee.png";
import qgisIcon from "../assets/logo_qgis.png";
import webgisIcon from "../assets/logo_webgis.png";

// Import gambar project
// Project ArcGIS
import pipelineMap from "../projects/arcgis/peta_jaringan_pipa.jpg";
import wasteRouteMap from "../projects/arcgis/peta_tps.jpg";

// Project GEE
import trenggalekAnalysis from "../projects/gee/landcover_trenggalek.png";
import surabayaAnalysis from "../projects/gee/landcover_surabaya.png";

// Project WebGIS
import webgisScreenshot from "../projects/webgis/webgis.png";

// Project AutoCAD
// WWTP Project
import WWTPimage1 from "../projects/autocad/wwtp/wwtp_1.jpg";
import WWTPimage2 from "../projects/autocad/wwtp/wwtp_2.jpg";
// 3D Modelling Project
import HorizontalTankModelling from "../projects/autocad/3D/horizontal_tank_modelling.jpg";

// Dummy placeholder (untuk project yang belum ada gambar)
const dummyImage = "https://placehold.co/800x600/1a2a4a/4a9eff?text=Coming+Soon";

export const projectsData = [
  {
    id: "arcgis",
    name: "ArcGIS Project",
    icon: arcgisIcon,
    color: "#1a6eff",
    subProjects: [
      {
        id: "pipeline-network",
        title: "Pipeline Network Map",
        images: [pipelineMap],  // ← ubah ke array
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        id: "waste-transportation",
        title: "Waste Transportation Route Map",
        images: [wasteRouteMap],  // ← ubah ke array
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      }
    ]
  },
  {
    id: "autocad",
    name: "AutoCAD Project",
    icon: autocadIcon,
    color: "#ff6b1a",
    subProjects: [
      {
        id: "autocad-project-1",
        title: "Waste Water Treatment Plant Layout",
        images: [WWTPimage1, WWTPimage2],  // ← ubah dari 'image' ke 'images'
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a dummy project placeholder. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "autocad-project-2",
        title: "AutoCAD Dummy Project 2",
        images: [dummyImage],  // ← ubah ke array
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a dummy project placeholder. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      },
      {
        id: "autocad-project-3",
        title: "3D Project",
        images: [HorizontalTankModelling],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a dummy project placeholder. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      }
    ]
  },
  {
    id: "gee",
    name: "Google Earth Engine",
    icon: GEEicon,
    color: "#1aff8a",
    subProjects: [
      {
        id: "trenggalek-analysis",
        title: "Land Cover Analysis - Trenggalek Regency",
        images: [trenggalekAnalysis],  // ← ubah ke array
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        id: "surabaya-analysis",
        title: "Land Cover Analysis - Surabaya City",
        images: [surabayaAnalysis],  // ← ubah ke array
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      }
    ]
  },
  {
    id: "qgis",
    name: "QGIS Project",
    icon: qgisIcon,
    color: "#9b1aff",
    subProjects: [
      {
        id: "dummy-qgis-1",
        title: "QGIS Dummy Project 1",
        images: [dummyImage],  // ← ubah ke array
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a dummy project placeholder. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: "dummy-qgis-2",
        title: "QGIS Dummy Project 2",
        images: [dummyImage],  // ← ubah ke array
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a dummy project placeholder. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      }
    ]
  },
  {
    id: "webgis",
    name: "WebGIS",
    icon: webgisIcon,
    color: "#1affea",
    subProjects: [
      {
        id: "solar-energy-dashboard",
        title: "WebGIS Dashboard - Solar Energy Map",
        images: [webgisScreenshot],  // ← ubah ke array
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interactive web-based GIS dashboard for solar energy potential mapping. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "https://webgis-solar-energy.vercel.app/"
      }
    ]
  }
];