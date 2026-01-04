#!/bin/bash

# Define commit types (Standard Conventional Commits)
types=("feat" "fix" "docs" "style" "refactor" "perf" "test" "chore" "ci" "build")

# Updated Scopes: Mapped to your business sectors and tech stack
scopes=(
  "real-estate" 
  "construction" 
  "hospitality" 
  "medical" 
  "procurement" 
  "ui-shared" 
  "shadcn" 
  "config" 
  "deps" 
  "layout"
)

echo "--- 🛠️  CONGLOMERATE APP COMMIT HELPER ---"

# Prompt user to select commit type
echo "Select commit type:"
select type in "${types[@]}"; do
  if [[ -n "$type" ]]; then
    break
  else
    echo "❌ Invalid selection."
  fi
done

# Prompt user to select commit scope
echo "Select commit scope:"
select scope in "${scopes[@]}" "custom"; do
  if [[ "$scope" == "custom" ]]; then
    read -p "Enter custom scope: " custom_scope
    scope="$custom_scope"
    break
  elif [[ -n "$scope" ]]; then
    break
  else
    echo "❌ Invalid selection."
  fi
done

# Get short commit message
read -p "🔤 Message: " message

# Get optional detailed description
read -p "📝 Details (optional): " details

# Get optional issue reference
read -p "🔗 Issue # (optional): " issue

# Compose commit message
commit_msg="$type($scope): $message"

[[ -n "$details" ]] && commit_msg+="\n\n$details"
[[ -n "$issue" ]] && commit_msg+="\n\nCloses $issue"

echo -e "\n--- Preview ---"
echo -e "$commit_msg"
echo -e "----------------\n"

# Final Confirmation
read -p "🚀 Commit this message? (y/n/edit): " final_choice

if [[ "$final_choice" == "y" || "$final_choice" == "Y" ]]; then
  git commit -m "$commit_msg"
  echo "✅ Commit created!"
elif [[ "$final_choice" == "edit" ]]; then
  echo -e "$commit_msg" > .git/COMMIT_EDITMSG
  git commit --edit -F .git/COMMIT_EDITMSG
  echo "✅ Edited and Committed!"
else
  echo "❌ Commit aborted."
fi