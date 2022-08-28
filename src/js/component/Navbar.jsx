import React from "react";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-light"><FaBars /></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}