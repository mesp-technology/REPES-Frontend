"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import styles from "../login.module.css";

export default function AuthCard() {
  // Authentication Form States
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Form Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Validation Errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  // Validation functions
  const validateEmail = (val: string) => {
    if (!val) {
      setEmailError("Email is required");
      return false;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (val: string) => {
    if (!val) {
      setPasswordError("Password is required");
      return false;
    }
    if (val.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateName = (val: string) => {
    if (activeTab === "signup" && !val.trim()) {
      setNameError("Full name is required");
      return false;
    }
    setNameError("");
    return true;
  };

  // Switch between tabs and clear state
  const handleTabChange = (tab: "signin" | "signup") => {
    setActiveTab(tab);
    setEmail("");
    setPassword("");
    setFullName("");
    setAgreeTerms(false);
    setEmailError("");
    setPasswordError("");
    setNameError("");
  };

  // Show simulated Toast alert
  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isNameValid = validateName(fullName);

    if (activeTab === "signup" && !agreeTerms) {
      showToast("You must agree to the Terms & Conditions", "error");
      return;
    }

    if (!isEmailValid || !isPasswordValid || (activeTab === "signup" && !isNameValid)) {
      showToast("Please correct the errors in the form", "error");
      return;
    }

    setIsLoading(true);

    // Simulate server request delay
    setTimeout(() => {
      setIsLoading(false);
      if (activeTab === "signin") {
        if (email === "demo@repes.com" && password === "password") {
          showToast("Successfully signed in! Redirecting...", "success");
        } else {
          // Generous demo logic: allow arbitrary logs but showcase real error mock
          if (email.startsWith("error")) {
            showToast("Invalid credentials. Try again.", "error");
          } else {
            showToast("Welcome back to REPES ecosystem!", "success");
          }
        }
      } else {
        showToast("Registration successful! Welcome aboard.", "success");
        // Automatically switch to sign-in tab
        setTimeout(() => {
          handleTabChange("signin");
        }, 1500);
      }
    }, 1800);
  };

  return (
    <section className={styles.rightPanel} aria-label="User account management">
      {/* FLOATING CUSTOM TOAST NOTIFICATION */}
      {toast && (
        <div
          className={`${styles.toast} ${toast.type === "success" ? styles.toastSuccess : styles.toastError}`}
          role="alert"
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#34d399" }} />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0" style={{ color: "#f87171" }} />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      <div className={styles.formWrapper}>
        {/* Glassmorphic Form Card block */}
        <div className={`${styles.card} ${styles.fadeUpElement}`}>
          <div className={styles.cardAmbientBg} />

          {/* Top header & descriptive copy */}
          <div className={`${styles.cardHeader} ${styles.fadeUpElement} ${styles.delay1}`}>
            <div className={styles.rightLogoContainer}>
              <Image
                src="/repes-logo.svg"
                alt="REPES Logo"
                width={134}
                height={68}
                priority
                className={styles.rightLogo}
              />
            </div>
            <h2 className={styles.cardTitle}>
              {activeTab === "signin" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className={styles.cardDesc}>
              {activeTab === "signin"
                ? "Sign in to manage real estate assets, monitor active orders & pipeline."
                : "Join the REPES ecosystem for scalable real estate media processing."}
            </p>
          </div>

          {/* TAB SELECTORS - Modern flat capsules */}
          <div className={`${styles.tabsContainer} ${styles.fadeUpElement} ${styles.delay2}`}>
            <button
              type="button"
              onClick={() => handleTabChange("signin")}
              className={`${styles.tabButton} ${
                activeTab === "signin" ? styles.tabButtonActive : styles.tabButtonInactive
              }`}
              aria-selected={activeTab === "signin"}
              id="tab-signin"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("signup")}
              className={`${styles.tabButton} ${
                activeTab === "signup" ? styles.tabButtonActive : styles.tabButtonInactive
              }`}
              aria-selected={activeTab === "signup"}
              id="tab-signup"
            >
              Sign Up
            </button>
          </div>

          {/* FORM CONTAINER */}
          <form onSubmit={handleSubmit} className={styles.form} id="auth-form" noValidate>
            {/* FULL NAME INPUT (Only shown on signup) */}
            {activeTab === "signup" && (
              <div className={`${styles.formField} ${styles.fadeUpElement} ${styles.delay3}`}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    id="input-fullname"
                    required
                    placeholder=" "
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (nameError) validateName(e.target.value);
                    }}
                    onBlur={() => validateName(fullName)}
                    disabled={isLoading}
                    className={`${styles.input} ${nameError ? styles.inputError : ""}`}
                  />
                  <label htmlFor="input-fullname" className={styles.label}>
                    Full Name
                  </label>
                </div>
                {nameError && (
                  <p className={styles.errorText}>
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{nameError}</span>
                  </p>
                )}
              </div>
            )}

            {/* EMAIL ADDRESS INPUT */}
            <div
              className={`${styles.formField} ${styles.fadeUpElement} ${
                activeTab === "signup" ? styles.delay4 : styles.delay3
              }`}
            >
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="input-email"
                  required
                  placeholder=" "
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) validateEmail(e.target.value);
                  }}
                  onBlur={() => validateEmail(email)}
                  disabled={isLoading}
                  className={`${styles.input} ${emailError ? styles.inputError : ""}`}
                />
                <label htmlFor="input-email" className={styles.label}>
                  Email Address
                </label>
              </div>
              {emailError && (
                <p className={styles.errorText}>
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{emailError}</span>
                </p>
              )}
            </div>

            {/* PASSWORD INPUT */}
            <div
              className={`${styles.formField} ${styles.fadeUpElement} ${
                activeTab === "signup" ? styles.delay5 : styles.delay4
              }`}
            >
              <div className={styles.inputWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="input-password"
                  required
                  placeholder=" "
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) validatePassword(e.target.value);
                  }}
                  onBlur={() => validatePassword(password)}
                  disabled={isLoading}
                  style={{ paddingRight: "48px" }}
                  className={`${styles.input} ${passwordError ? styles.inputError : ""}`}
                />
                <label htmlFor="input-password" className={styles.label}>
                  Password
                </label>

                {/* Eye Toggle button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className={styles.eyeButton}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {passwordError && (
                <p className={styles.errorText}>
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{passwordError}</span>
                </p>
              )}
            </div>

            {/* REMEMBER ME & FORGOT PASSWORD (Only shown in signin state) */}
            {activeTab === "signin" ? (
              <div className={`${styles.optionsRow} ${styles.fadeUpElement} ${styles.delay5}`}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" disabled={isLoading} className={styles.checkboxInput} />
                  <span>Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => showToast("Password reset flow simulated successfully.", "success")}
                  disabled={isLoading}
                  className={styles.forgotLink}
                >
                  Forgot Password?
                </button>
              </div>
            ) : (
              /* TERMS AND CONDITIONS (Only shown in signup state) */
              <div className={`${styles.termsRow} ${styles.fadeUpElement} ${styles.delay6}`}>
                <input
                  type="checkbox"
                  id="checkbox-terms"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  disabled={isLoading}
                  className={styles.checkboxInput}
                  style={{ marginTop: "2px" }}
                />
                <label htmlFor="checkbox-terms" className={styles.termsLabel}>
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => showToast("Simulating Terms & Conditions view.", "success")}
                    className={styles.termsLink}
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => showToast("Simulating Privacy Policy view.", "success")}
                    className={styles.termsLink}
                  >
                    Privacy Policy
                  </button>
                  .
                </label>
              </div>
            )}

            {/* MAIN SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              id="btn-auth-submit"
              className={`${styles.submitButton} ${styles.fadeUpElement} ${
                activeTab === "signup" ? styles.delay7 : styles.delay6
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className={`w-4 h-4 ${styles.loaderIcon}`} />
                  <span>Processing Securely...</span>
                </>
              ) : (
                <span>{activeTab === "signin" ? "Sign In to REPES" : "Create Account"}</span>
              )}
            </button>
          </form>

          {/* SEPARATOR - Elegant line dividers */}
          <div
            className={`${styles.separator} ${styles.fadeUpElement} ${
              activeTab === "signup" ? styles.delay8 : styles.delay7
            }`}
          >
            <div className={styles.separatorLine} aria-hidden="true" />
            <span className={styles.separatorText}>Or Continue With</span>
          </div>

          {/* SOCIAL LOGINS */}
          <div
            className={`${styles.socialGrid} ${styles.fadeUpElement} ${
              activeTab === "signup" ? styles.delay8 : styles.delay8
            }`}
          >
            {/* Google login Option */}
            <button
              type="button"
              onClick={() => showToast("Google Single Sign-On flow simulated.", "success")}
              disabled={isLoading}
              className={styles.socialButton}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" style={{ display: "block" }}>
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.54 14.98 1 12 1 7.35 1 3.37 3.65 1.39 7.56l3.85 2.99c.9-2.69 3.42-4.51 6.76-4.51z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.44h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.97 3.37-4.88 3.37-8.49z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.24 10.55c-.23-.69-.36-1.42-.36-2.18s.13-1.49.36-2.18L1.39 3.2C.5 4.96 0 6.92 0 9s.5 4.04 1.39 5.8l3.85-3.25z"
                />
                <path
                  fill="#34A853"
                  d="M12 18.96c-3.34 0-5.86-1.82-6.76-4.51l-3.85 2.99C3.37 20.35 7.35 23 12 23c2.98 0 5.67-.99 7.56-2.68l-3.66-2.84c-1.02.68-2.33 1.08-3.9 1.08z"
                />
              </svg>
              <span>Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
