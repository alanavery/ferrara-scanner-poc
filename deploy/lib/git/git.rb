# frozen_string_literal: true

module Git
  module_function

  def default_branch
    `git symbolic-ref --short refs/remotes/origin/HEAD`.strip.split('/').last || 'main'
  end

  def commit_sha
    `git rev-parse --verify HEAD 2> /dev/null`.strip
  end

  def branch
    `git branch --show-current 2> /dev/null`.strip
  end

  def hotfix_branch
    "hotfix/#{Environment.current}"
  end

  def tag
    # Finds the most recent tag that is reachable from HEAD
    `git describe --tags 2> /dev/null`.strip
  end

  def tagged_commit
    # Finds a commit pointed by a specific tag
    return if tag.strip.empty?

    `git rev-parse tags/#{tag}`.strip
  end

  def all_tags
    `git --no-pager tag`.split
  end

  def tag_at_commit
    `git --no-pager tag --points-at #{commit_sha}`.strip
  end

  def tag_exists_at_commit?
    !tag_at_commit.empty?
  end

  def tag_at_date
    Git.all_tags.grep(/#{Config.date}-\d{2}#{Release.tag_suffix}/)
  end
end
