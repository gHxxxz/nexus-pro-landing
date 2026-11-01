import { createClient } from "https://esm.sh/@supabase/supabase-js@2.118.0";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "./supabase-config.js";

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
const dialog = document.querySelector("#auth-dialog");
const title = document.querySelector("#auth-title");
const description = document.querySelector("#auth-description");
const status = document.querySelector("#auth-status");
const loginForm = document.querySelector("#auth-login-form");
const signupForm = document.querySelector("#auth-signup-form");
const recoveryForm = document.querySelector("#auth-recovery-form");
const updateForm = document.querySelector("#auth-update-form");
const accountPanel = document.querySelector("#auth-account-panel");
const userEmail = document.querySelector("#auth-user-email");
const openButton = document.querySelector("[data-auth-open]");
const forms = [loginForm, signupForm, recoveryForm, updateForm, accountPanel];
let currentUser = null;
let currentMode = "login";

function showStatus(message, isError = false) {
  status.textContent = message;
  status.style.color = isError ? "#ff7785" : "#b7b7bd";
}

function setMode(mode) {
  currentMode = mode;
  status.textContent = "";
  forms.forEach((form) => {
    form.hidden = true;
  });

  if (mode === "account") {
    title.textContent = "Sua conta";
    description.textContent = "Sua sessão está ativa.";
    accountPanel.hidden = false;
    userEmail.textContent = currentUser?.email ?? "";
    return;
  }

  const views = {
    login: [loginForm, "Entrar na NEXUS PRO", "Acesse sua conta com email e senha."],
    signup: [signupForm, "Criar sua conta", "Use seu email e crie uma senha com pelo menos 8 caracteres."],
    recovery: [recoveryForm, "Recuperar senha", "Enviaremos um link para o email informado."],
    update: [updateForm, "Definir nova senha", "Escolha uma senha com pelo menos 8 caracteres."]
  };
  const [form, heading, helper] = views[mode];
  form.hidden = false;
  title.textContent = heading;
  description.textContent = helper;
}

function openAuth() {
  setMode(currentUser ? "account" : "login");
  if (!dialog.open) dialog.showModal();
}

function setFormBusy(form, busy) {
  form.querySelectorAll("button, input").forEach((control) => {
    control.disabled = busy;
  });
  form.setAttribute("aria-busy", String(busy));
}

function displayAuthError(error) {
  console.error("Supabase authentication failed:", error);
  showStatus("Não foi possível concluir. Confira os dados e tente novamente.", true);
}

function handleFormSubmit(form, request, onSuccess) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    setFormBusy(form, true);
    showStatus("");

    try {
      const { data, error } = await request(new FormData(form));
      if (error) {
        displayAuthError(error);
        return;
      }

      await onSuccess(data);
    } catch (error) {
      displayAuthError(error);
    } finally {
      setFormBusy(form, false);
    }
  });
}

openButton.addEventListener("click", openAuth);
document.querySelector("[data-auth-close]").addEventListener("click", () => dialog.close());
document.querySelectorAll("[data-auth-mode]").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.authMode));
});

handleFormSubmit(loginForm, (formData) => supabase.auth.signInWithPassword({
  email: formData.get("email"),
  password: formData.get("password")
}), async () => {
  showStatus("Login realizado com sucesso.");
  window.setTimeout(() => dialog.close(), 700);
});

handleFormSubmit(signupForm, (formData) => supabase.auth.signUp({
  email: formData.get("email"),
  password: formData.get("password"),
  options: { emailRedirectTo: window.location.origin }
}), async (data) => {
  if (data.session) {
    showStatus("Conta criada e login realizado.");
    window.setTimeout(() => dialog.close(), 900);
    return;
  }

  showStatus("Conta criada. Confira seu email para confirmar o cadastro.");
});

handleFormSubmit(recoveryForm, (formData) => supabase.auth.resetPasswordForEmail(
  formData.get("email"),
  { redirectTo: window.location.origin }
), async () => {
  showStatus("Se o email estiver cadastrado, você receberá um link para redefinir a senha.");
});

handleFormSubmit(updateForm, (formData) => supabase.auth.updateUser({
  password: formData.get("password")
}), async () => {
  updateForm.reset();
  showStatus("Senha atualizada. Você já pode acessar sua conta.");
  window.setTimeout(() => setMode("account"), 900);
});

document.querySelector("#auth-signout").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  button.disabled = true;

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      displayAuthError(error);
      return;
    }

    showStatus("Você saiu da sua conta.");
    window.setTimeout(() => dialog.close(), 700);
  } catch (error) {
    displayAuthError(error);
  } finally {
    button.disabled = false;
  }
});

supabase.auth.onAuthStateChange((event, session) => {
  currentUser = session?.user ?? null;
  openButton.textContent = currentUser ? "Minha conta" : "Entrar";

  if (event === "PASSWORD_RECOVERY") {
    if (!dialog.open) dialog.showModal();
    setMode("update");
  } else if (dialog.open && currentMode === "account") {
    setMode(currentUser ? "account" : "login");
  }
});
